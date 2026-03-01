const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

const shallowCopy = { ...user };
shallowCopy.name="Rahul";
shallowCopy.preferences.theme="light";
console.log(user);
console.log(shallowCopy);

//same reference so changes the theme for both objects
