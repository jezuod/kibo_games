// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { TabView, TabBar, SceneRendererProps } from 'react-native-tab-view';
// import { IVideoGame } from "../models/videogame";

// interface Props {
//   videoGame: IVideoGame;
// }

// // Definimos una interfaz extendida de SceneRendererProps
// interface ExtendedSceneRendererProps extends SceneRendererProps {
//   route: { key: string; title: string }; // Aseguramos que la propiedad route esté definida
// }

// const GameDetalle: React.FC<Props> = ({ videoGame }) => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'description', title: 'Description' },
//     { key: 'tutorial', title: 'Tutorial' },
//     { key: 'video', title: 'Video' },
//   ]);

//   // Ajustamos el tipo de props para incluir el tipo extendido
//   const renderScene = ({ route }: ExtendedSceneRendererProps) => {
//     switch (route.key) {
//       case 'description':
//         return (
//             <View style={styles.scene}>
//               <Text>{videoGame.description}</Text>
//             </View>
//         );
//       case 'tutorial':
//         return (
//             <View style={styles.scene}>
//               <Text>{videoGame.tutorial}</Text>
//             </View>
//         );
//       case 'video':
//         return (
//             <View style={styles.scene}>
//               <Text>Video URL: {videoGame.videoUrl}</Text>
//             </View>
//         );
//       default:
//         return null;
//     }
//   };

//   const renderTabBar = (props: any) => (
//       <TabBar
//           {...props}
//           indicatorStyle={{ backgroundColor: 'blue' }}
//           style={{ backgroundColor: 'white' }}
//       />
//   );

//   return (
//       <View style={styles.container}>
//         <Image
//             source={{ uri: videoGame.mainImage }}
//             style={styles.image}
//         />
//         <TabView
//             navigationState={{ index, routes }}
//             renderScene={renderScene}
//             onIndexChange={setIndex}
//             renderTabBar={renderTabBar}
//         />
//       </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   image: {
//     width: 100,
//     height: 100,
//   },
//   scene: {
//     flex: 1,
//     padding: 16,
//   },
// });

// export default GameDetalle;