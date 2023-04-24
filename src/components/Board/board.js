import './board.css';
import Box from '../Box/box';
function Board() {
  return (
    <div className='board-container'>
        <div  className='board-row' >
        <Box/>
        <Box/>
        <Box/>
        </div>

        <div className='board-row'>
        <Box/>
        <Box/>
        <Box/>
        </div>

        <div className='board-row'>
        <Box/>
        <Box/>
        <Box/>
        </div>
    </div>
  );
}

export default Board;
