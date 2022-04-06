import blankAvatar from '../Images/blank-avatar.png';

const AvatarDisplay = () => {
  return (
    <div className="avatar-container">
      <div className="image-container">
        <img
          src={ticket.avatar ? ticket.avatar : blankAvatar}
          alt={'photo of ' + ticket.owner}
        />
      </div>
    </div>
  );
};
export default AvatarDisplay;
