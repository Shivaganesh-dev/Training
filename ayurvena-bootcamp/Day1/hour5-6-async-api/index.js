// ASYNC API EXAMPLE

async function getUsers() {
  try {
    console.log(" Fetching users...");
// here we use BE link
    const response = await fetch("https://jsonplaceholder.typicode.com/users")    

    // it shows if req fails
    if (!response.ok) {
      throw new Error("API request failed");
    }

// WE GIVE DATA IN JSON FORMAT IN DB
    const users = await response.json();

    console.log("\n USERS LIST:");

    users.forEach((user) => {
        // give here as per BE names
      console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    });

  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Run function
getUsers();