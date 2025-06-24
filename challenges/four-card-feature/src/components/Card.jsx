// Pasamos las props de componente padre a componente hijo
export const Card = ( { title, description, icon, color } ) => {

    return (
        <div className="relative min-h-[230px] xl:max-w-[360px] rounded-md p-8 shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)] overflow-hidden">
            <div className={`${color} h-[5px] absolute top-0 left-0 w-full`}></div>
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-grey-400 text-sm">{description}</p> 
            <img src={icon} alt="Icono de la tarjeta" 
                className="float-right mt-6" 
            />
        </div>
    );

}