import React from 'react';
import '../styles/enemyitem.scss';

const EnemyItem = ({enemy, deleteEnemy, toggleHealthModal}) => {
  if (!enemy) {
    return <div />;
  }

	return (
    <div className="enemy-item">
      <p onClick={() => toggleHealthModal(enemy)}>{enemy.name} - <strong>{enemy.health}</strong>pts of damage</p>
      <i className="material-icons add-button" onClick={() => deleteEnemy(enemy.id)}>delete</i>
    </div>
  );
}

export default EnemyItem;
