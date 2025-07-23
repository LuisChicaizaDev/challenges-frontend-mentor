import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Enviado correctamente.');

export const Form = () => {

    // Extramos los métodos de hook de Form
    const { 
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm();

    // Data es un objeto que almacena los datos del formulario
    const onSubmit = (data) => {

        // Se enviarían los datos al servidor
        console.log(data)

        // Mostraremos un toast
        notify();
    };


    return (
        /* "handleSubmit" recoge la data y validará los input antes de invocar "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}  
            className="max-w-75 m-auto flex flex-col gap-4 md:flex-row md:max-w-130 md:items-start mb-10">

            {/*Componente para mostrar el toast */}
            <Toaster />

            <div className="w-full">
                <input className={`
                border-1 rounded-full px-8 py-2.5 w-full
                font-light text-sm 
                placeholder:text-gray-500/50 placeholder:text-sm
                focus:outline-none 
                ${errors.email ? 'border-red-600' : 'border-secondary-blue-200'}
                `}
                type="email" placeholder="Your email address... "
                /* Registramos el input con la funcion register */
                {...register("email", 
                    {
                        required: true,
                        pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
                    })
                }
                />

                {/** Muestra un mensaje de error dependiendo del tipo 'required' o 'pattern' */}
                {
                    errors.email?.type === "required" && <p className="error text-red-600 text-xs italic text-center mt-1.5 mb-2 md:text-start md:pl-8">The field mustn't be empty</p>
                }
                {
                    errors.email?.type === "pattern" && <p className="error text-red-600 text-xs italic text-center mt-1.5 mb-2 md:text-start md:pl-8">Please provide a valid email address</p>
                }
            </div>
            

            <input className="bg-primary-blue-500 text-white w-full rounded-full px-8 py-2.5 text-sm 
                shadow-lg shadow-secondary-blue-200 cursor-pointer
                hover:bg-primary-blue-500/80
                md:shrink-1 md:w-auto"
                type="submit" value="Notify Me" 
            />
        </form>
    );
}