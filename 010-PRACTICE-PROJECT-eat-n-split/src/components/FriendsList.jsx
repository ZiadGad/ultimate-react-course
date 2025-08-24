import Friend from "./Friend";

export default function FriendsList({ friends, onSelection, selectedFriend }) {
  //

  return (
    <div>
      {friends.map((f) => (
        <Friend
          friend={f}
          key={f.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </div>
  );
}
