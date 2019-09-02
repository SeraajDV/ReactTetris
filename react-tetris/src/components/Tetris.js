import React from 'react';
import { createStage } from '../gameHelpers';

//Components
import Display from './Display';
import Stage from './Stage';
import StartButton from './StartButton';

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Levels" />
                </div>
                <StartButton />
            </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris; 