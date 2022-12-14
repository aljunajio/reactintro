import React from 'react'

export default function Rules() {
  return (
    <div className='shadow-sm p-4 bg-white'>
      
      <div className='mb-5'>
      <h1 className='text-muted'>RULES FOR ○×ゲーム</h1>

<p>1. The game is played on a grid that's 3 squares by 3 squares.</p>
<p>2. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.</p>
<p>3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.</p>
<p>4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</p>
      </div>


        <div className='mb-4'>
        <h1 className='text-muted'>HOW CAN I WIN AT ○×ゲーム?</h1>
    <p>Part of your strategy is trying to figure out how to get three Xs in a row. The other part is trying to figure out how to stop the computer from getting three Os in a row.</p>
    <p>After you put an X in a square, you start looking ahead. Where's the best place for your next X? You look at the empty squares and decide which ones are good choices—which ones might let you make three Xs in a row.</p>
    <p>If you always pay attention and look ahead, you'll never lose a game of ○×ゲーム. You may not win, but at least you'll tie.</p>


        </div>

    </div>
  )
}
