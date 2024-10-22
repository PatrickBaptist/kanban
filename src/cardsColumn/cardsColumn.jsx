import {  useEffect } from 'react'
import PropTypes from 'prop-types'
import './cardsColumn.css'
import Plus from '../assets/mais.png'
import Cards from '../cards/cards';

function CardsColumn({ content, data, colorPriority, priority, review }) {

    useEffect(() => {
        const cards = document.querySelectorAll('.kanban-card');
        const columns = document.querySelectorAll('.kanban-cards');

        cards.forEach(card => {
            const handleDragStart = e => e.currentTarget.classList.add('dragging');
            const handleDragEnd = e => e.currentTarget.classList.remove('dragging');
            card.addEventListener('dragstart', handleDragStart);
            card.addEventListener('dragend', handleDragEnd);

            return () => {
                card.removeEventListener('dragstart', handleDragStart);
                card.removeEventListener('dragend', handleDragEnd);
            };
        });

        columns.forEach(column => {
            const handleDragOver = e => {
                e.preventDefault();
                e.currentTarget.classList.add('cards-hover');
            };
            const handleDragLeave = e => e.currentTarget.classList.remove('cards-hover');
            const handleDrop = e => {
                e.currentTarget.classList.remove('cards-hover');
                const dragCard = document.querySelector('.kanban-card.dragging');
                e.currentTarget.appendChild(dragCard);
            };

            column.addEventListener('dragover', handleDragOver);
            column.addEventListener('dragleave', handleDragLeave);
            column.addEventListener('drop', handleDrop);

            return () => {
                column.removeEventListener('dragover', handleDragOver);
                column.removeEventListener('dragleave', handleDragLeave);
                column.removeEventListener('drop', handleDrop);
            };
        });
    }, []);

    return (
        <div className="kanban-column" data-id={data}>
            <div className="kanban-title">
                <h2>
                    {content}
                </h2>

                <button className="add-card">
                    <img src={Plus} alt="plus" />
                </button>
            </div>

            <div className="kanban-cards">
                <Cards colorPriority={colorPriority} priority={priority} review={review}/>
            </div>
        </div>
    )
}

CardsColumn.propTypes = {
    content: PropTypes.string.isRequired,
    data: PropTypes.string,
    priority: PropTypes.string,
    review: PropTypes.string,
    colorPriority: PropTypes.string
}

export default CardsColumn