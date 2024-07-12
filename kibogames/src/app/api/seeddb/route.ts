
import { NextResponse } from 'next/server';
import connectToDatabase, { dropAllCollections } from '@/lib/mongodb';
import  { IVideoGame } from '@/app/models/videogame';
import { videoGamesRow1, videoGamesRow2 } from '@/app/constants/constants';
import  { ICategory } from '@/app/models/category';
import { Category, VideoGame } from '@/app/models/allModels';


export async function GET() {
    await dropAllCollections();



    var result = await VideoGame.find();
    var juegos = JSON.parse(JSON.stringify(result)) as any[];
    console.log(juegos);

    //TODO: DESCOMENTAR CUANDO SE TERMINE EL SCRIPT
    // if (juegos.length > 0) {
    //     return NextResponse.json({ "status": "Datos ya existentes" });
    // }

    await VideoGame.deleteMany({});
    await Category.deleteMany({});

    await VideoGame.insertMany(videoGamesRow1)
    await VideoGame.insertMany(videoGamesRow2)

    result = await VideoGame.find();
    juegos = JSON.parse(JSON.stringify(result)) as IVideoGame[];

    var categorias = new Map<string, ICategory>();


    juegos.map((juego: IVideoGame) => {
        juego.categories.map((categoria: string) => {
            if (!categorias.has(categoria)) {
                categorias.set(categoria, { name: categoria, videoGames: [juego._id!.toString()] });
            } else {
                if (categoria as string && !categorias.get(categoria).videoGames.includes(juego._id.toString())) {
                    categorias.get(categoria).videoGames.push(juego._id.toString());
                }
            }
        });
    });

    await Category.insertMany(Array.from(categorias.values()));

    result = await Category.find().populate('videoGames');
    var cats = JSON.parse(JSON.stringify(result)) as ICategory[];



    console.log("status", "Datos creados correctamente");
    return NextResponse.json({ "status": "Datos creados correctamente", categoriasWithGames: cats });


}