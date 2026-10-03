import { useState } from "react";
// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//     pays: true,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//     pays: false,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//     pays: false,
//   },
// ];

function Button({ children, onClick, className }) {
  return (
    <button className={`button ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  //To handle friend list by adding and updating, we are creating new array fro friends.
  const [friends, setFriends] = useState([]);
  const [showSelectedFriend, setShowSelectedFriend] = useState(false);
  const [showSplitBillForm, setShowSplitBillForm] = useState(false);

  //Handle hide and show add friend form
  const handleToggleAddFriendForm = () => {
    setShowSelectedFriend(!showSelectedFriend);
  };

  //Handle adding a new friend
  const handleAddFriend = (newFriend) => {
    console.log("Adding new friend:", newFriend);
    //set pays = true if friends array is empty
    if (friends.length === 0) {
      newFriend.pays = true;
    }
    setFriends([...friends, newFriend]);
    // Alwsys add friend usig spread operator, becuase react state should not be mutated directly.
    setShowSelectedFriend(false);
  };

  //Handle hide and show split bill form
  const handleToggleSplitBillForm = () => {
    setShowSplitBillForm(!showSplitBillForm);
  };

  //Find out friend who paid the bill
  const paidFriend = friends.find((friend) => friend.pays)?.name;

  //Change payee
  const handleChangePayee = (id) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === id
          ? { ...friend, pays: true }
          : { ...friend, pays: false },
      ),
    );
  };

  //handle expenses
  const handleChangeExpenses = (expenses) => {
    console.log("Updating expenses:", expenses);
    setFriends((prevFriends) =>
      prevFriends.map((friend) => ({
        ...friend,
        balance: expenses[friend.id] || 0,
      })),
    );
  };

  //Handle paying the bill for a friend
  const handlePayBill = (id) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === id ? { ...friend, alreadyPaid: true } : friend,
      ),
    );
  };

  return (
    <div className="app">
      <h1
        className="app-title"
        style={{ textAlign: "center", gridColumn: 1 / 3 }}
      >
        Eat-N-Split
      </h1>
      <div className="sidebar">
        <FreindList
          initialFriends={friends}
          paidFriend={paidFriend}
          handlePayBill={handlePayBill}
        />
        {showSelectedFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleToggleAddFriendForm}>
          {showSelectedFriend ? "Close" : "Add friend"}
        </Button>
        {friends.length > 0 && (
          <Button onClick={handleToggleSplitBillForm}>
            {showSplitBillForm ? "Close" : "Split bill"}
          </Button>
        )}
      </div>
      {showSplitBillForm && (
        <FormSplitBill
          initialFriends={friends}
          onChangePayee={handleChangePayee}
          onChangeExpenses={handleChangeExpenses}
        />
      )}
    </div>
  );
}

// Display Friend's List
function FreindList({ initialFriends, paidFriend, handlePayBill }) {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend
          key={friend.id}
          {...friend}
          paidFriend={paidFriend}
          handlePayBill={handlePayBill}
        />
      ))}
    </ul>
  );
}

function Friend({ paidFriend, handlePayBill, ...friend }) {
  return (
    <li key={friend.id}>
      <h3>{friend.name}</h3>
      {/* Set friend image if available if not then use user name first letter with background-color and font color */}
      {friend.image ? (
        <img src={friend.image} alt={friend.name} />
      ) : (
        <div className="friend-placeholder">{friend.name[0].toUpperCase()}</div>
      )}

      {/* Display who pays the bill. if friend.pays=true, then  it should diaply you paid the bill with green color */}
      {friend.balance > 0 &&
        (friend.pays ? (
          <p className="green">You paid ₹{Math.abs(friend.balance)} yourself</p>
        ) : !friend.alreadyPaid ? (
          <p className="red">
            You owe {paidFriend} ₹{Math.abs(friend.balance)}
          </p>
        ) : (
          <p className="green">
            You paid ₹{Math.abs(friend.balance)} to {paidFriend}
          </p>
        ))}

      {/* {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>} */}

      {friend.balance > 0 && !friend.pays && !friend.alreadyPaid && (
        // Add pay-button class to the child component to style it as a pay button
        <Button onClick={() => handlePayBill(friend.id)} className="pay-button">
          Pay
        </Button>
      )}
    </li>
  );
}

//Display Add friend form
function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name && !image) return;
    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image,
      balance: 0,
      pays: false,
      alreadyPaid: false,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("");
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌄 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

//Display Split bill form
function FormSplitBill({ initialFriends, onChangePayee, onChangeExpenses }) {
  //Create state variables for the bill value and each friend's expense
  const [billValue, setBillValue] = useState("");
  const [expenses, setExpenses] = useState(
    initialFriends.reduce((acc, friend) => {
      acc[friend.id] = "";
      return acc;
    }, {}),
  );
  const [selectedPayee, setSelectedPayee] = useState(
    initialFriends.find((friend) => friend.pays) || "",
  );
  const [selectPayee, setSelectPayee] = useState(false);
  // Note: The form is not functional yet. It is just a static representation of the UI.

  //Display the split bill form with the selected friend and the calculated amounts. The form allows the user to input the total bill value, their own expense, and the friend's expense. The user can also select who is paying the bill. The "Split" button will eventually handle the logic to update the balances accordingly.
  function handleSubmit(event) {
    event.preventDefault();
    // Logic to handle the split bill will go here
    selectPayee && onChangePayee(selectedPayee.id);
    onChangeExpenses(expenses);

    setBillValue("");
    setExpenses(
      initialFriends.reduce((acc, friend) => {
        acc[friend.id] = "";
        return acc;
      }, {}),
    );
    setSelectedPayee(initialFriends.find((friend) => friend.pays) || "");
    setSelectPayee(false);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>
        Split a bill with{" "}
        {initialFriends.find((friend) => friend.pays)?.name || "someone"}
      </h2>
      <div className="form-split-bill-section">
        <label>💰 Bill value</label>
        <input
          type="number"
          value={billValue}
          onChange={(e) => setBillValue(e.target.value)}
        />
      </div>
      {initialFriends.map((friend) => (
        <div key={friend.id} className="form-split-bill-section">
          <label>🧑‍🤝‍🧑 {friend.name} expense</label>
          <input
            type="number"
            value={expenses[friend.id]}
            onChange={(e) =>
              setExpenses((prevExpenses) => ({
                ...prevExpenses,
                [friend.id]: e.target.value,
              }))
            }
          />
        </div>
      ))}
      <div className="form-split-bill-section">
        <label>👤 Who is paying the bill?</label>
        <select
          value={selectedPayee.name || ""}
          onChange={(e) => {
            setSelectPayee(true);
            const selectedFriend = initialFriends.find(
              (friend) => friend.name === e.target.value,
            );
            if (selectedFriend) {
              setSelectedPayee(selectedFriend);
              // onChangePayee(selectedFriend.id);
            }
          }}
        >
          {/* <option value="you">You</option> */}
          {initialFriends.map((friend) => (
            <option key={friend.id} value={friend.name}>
              {friend.name}
            </option>
          ))}
        </select>
      </div>
      <Button>Split</Button>
    </form>
  );
}
