import { Card } from "./Card";
import IconSupervisor from "./../assets/images/icon-supervisor.svg";
import IconTeamBuilder from "./../assets/images/icon-team-builder.svg";
import IconKarma from "./../assets/images/icon-karma.svg";
import IconCalculator from "./../assets/images/icon-calculator.svg";

export const CardsContainer = () => {

    // Array de objetos con la información de las cards
    const services = [
        {
            id: 1, // Obligatorio para React
            title : "Supervisor",
            description: "Monitors activity to identify project roadblocks",
            icon: IconSupervisor,
            color: "bg-cyan"
        },
        {
            id: 2,
            title : "Team Builder",
            description: "Scans our talent network to create the optimal team for your project",
            icon: IconTeamBuilder,
            color: "bg-red"
        },
        {
            id: 3,
            title : "Karma",
            description: "Regularly evaluates our talent to ensure quality",
            icon: IconKarma,
            color: "bg-orange"
        },
        {
            id: 4,
            title : "Calculator",
            description: "Uses data from past projects to provide better delivery estimates",
            icon: IconCalculator,
            color: "bg-blue"
        }
    ];

    return (
        <section className="flex flex-col gap-8 xl:flex-row xl:items-center">
            { /* Spread operator para pasar todas las propiedades del objeto como props, directamente con el indice del array */ }
            <Card {...services[0]} />
            <div className="flex flex-col gap-8">
                <Card {...services[1]} />
                <Card {...services[2]} />
            </div>
            <Card {...services[3]} />
        </section>
    );
}