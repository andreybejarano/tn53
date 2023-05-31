import SmallCard from './SmallCard'

const cards = [
    {
        title: 'Movies in Data Base',
        color: 'primary',
        quantity: 21,
        icon: 'fa-film'
    },
    {
        title: 'Total awards',
        color: 'success',
        quantity: 79,
        icon: 'fa-award'
    },
    {
        title: 'Actors quantity',
        color: 'warning',
        quantity: 49,
        icon: 'fa-user'
    }
]

function ContentRowMovies() {
    return (
        <div className="row">
            {cards.map((card, key) =>
                <SmallCard key={key} color={card.color} title={card.title} quantity={card.quantity} icon={card.icon} />
            )}
        </div>
    )
}

export default ContentRowMovies