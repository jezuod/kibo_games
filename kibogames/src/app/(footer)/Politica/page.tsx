const PolicyPage = () => {
    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center mb-6">Términos de Servicio</h1>
        <p className="mb-4 text-justify">
          Bienvenido a Kibo Games, donde te ofrecemos una experiencia única para jugar juegos de mesa en línea. Antes de comenzar a disfrutar de nuestros servicios, es importante que leas y comprendas nuestros términos de servicio.
        </p>
        <h2 className="text-xl font-semibold mb-2">Uso del Servicio</h2>
        <p className="mb-4 text-justify">
          Al utilizar los servicios de Kibo Games, aceptas cumplir con estos términos. Nuestro servicio está diseñado para ser utilizado por personas mayores de 13 años. Si eres menor de 13 años, necesitarás el consentimiento de tus padres o tutores para utilizar nuestros servicios.
        </p>
        <h2 className="text-xl font-semibold mb-2">Contenido del Usuario</h2>
        <p className="mb-4 text-justify">
          Kibo Games permite a los usuarios cargar, compartir y crear contenido. Sin embargo, es importante que respetes los derechos de autor y no publiques contenido que sea ilegal, difamatorio, obsceno o que viole los derechos de propiedad intelectual de terceros.
        </p>
        <h2 className="text-xl font-semibold mb-2">Privacidad</h2>
        <p className="mb-4 text-justify">
          En Kibo Games, nos tomamos muy en serio tu privacidad. Consulta nuestra Política de Privacidad para obtener más información sobre cómo recopilamos, utilizamos y protegemos tus datos personales.
        </p>
        <h2 className="text-xl font-semibold mb-2">Modificaciones</h2>
        <p className="mb-4 text-justify">
          Nos reservamos el derecho de modificar o actualizar estos términos de servicio en cualquier momento. Te recomendamos que revises regularmente esta página para estar al tanto de cualquier cambio.
        </p>
        <p className="mb-4 text-justify">
          Si tienes alguna pregunta sobre nuestros términos de servicio, no dudes en ponerte en contacto con nosotros.
        </p>
        
        {/* Formulario de contacto */}
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contacto</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">¿Tienes alguna pregunta o comentario? ¡Déjanos saber!</p>
            <form action="#" className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tu correo electrónico</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@kibogames.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tu mensaje</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Déjanos tu comentario..." required></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar mensaje</button>
            </form>
          </div>
          {/* Botón adicional */}
          <div className="flex justify-center mt-8">
            <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800">Enviar</button>
          </div>
        </section>
      </div>
    );
  };
  
  export default PolicyPage;
  

  
  