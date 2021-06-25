import React from 'react';

import copyImg from '../assets/images/copy.svg';

import '../styles/roomCode.scss';

type RoomCodeProps = {
  code: string;
};

export const RoomCode: React.FC<RoomCodeProps> = (props) => {
  function copyRoomCodeToClipboard(): void {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code">
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>

      <span onClick={copyRoomCodeToClipboard}>Sala #-McvhWhJtOSZ-JTL0ni7</span>
    </button>
  );
};
