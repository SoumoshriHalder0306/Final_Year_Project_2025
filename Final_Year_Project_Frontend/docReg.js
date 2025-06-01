// Populate specialization dropdown on page load
        fetch("http://localhost:8080/doctor/specializations")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const specializationDropdown = document.getElementById("specializations");
                data.forEach(specialization => {
                    console.log(specialization);
                    const option = document.createElement("option");
                    option.value = specialization[0];
                    option.textContent = specialization[1];
                    specializationDropdown.appendChild(option);
                });
            })
            .catch(error => console.error("Error fetching specializations:", error));

        // (Do the same for qualification if needed)

        const form1E1 = document.querySelector("#registrationForm");
        form1E1.addEventListener("submit", event => {
            event.preventDefault(); // Prevent form submission

            // Validate form fields
            let isValid = true;

            // Validate Doctorname
            const docName = document.getElementById("doctorName");
            const doctornameError = document.getElementById("doctorNameError");
            if (docName.value.trim() === "") {
                doctornameError.style.display = "block";
                isValid = false;
            } else {
                doctornameError.style.display = "none";
            }

            // Validate email
            const docEmail = document.getElementById("email");
            const emailError = document.getElementById("emailError");
            if (docEmail.value.trim() === "") {
                emailError.style.display = "block";
                isValid = false;
            } else {
                emailError.style.display = "none";
            }

            // Validate qualification
            // const degrees = document.getElementById("deegrees");
            // const qualificationError = document.getElementById("qualificationError");
            // if (degrees.value.trim() === "") {
            //     qualificationError.style.display = "block";
            //     isValid = false;
            // } else {
            //     qualificationError.style.display = "none";
            // }

            // Validate specialization
            const specialization = document.getElementById("specializations");
            const specializationError = document.getElementById("specializationError");
            const selectedSpecializations = Array.from(specialization.selectedOptions).map(opt => opt.value);

            if (selectedSpecializations.length === 0) {
                specializationError.style.display = "block";
                isValid = false;
            } else {
                specializationError.style.display = "none";
            }

            // Uncomment and validate password if needed
            // const password = document.getElementById("password");
            // const passwordError = document.getElementById("passwordError");
            // if (password.value.trim() === "") {
            //     passwordError.style.display = "block";
            //     isValid = false;
            // } else {
            //     passwordError.style.display = "none";
            // }

            // If all fields are valid, submit the form
            if (isValid) {
                const formData = new FormData(form1E1);
                const data = Object.fromEntries(formData);
                data.specialization = selectedSpecializations; // override with array
                console.log(data);
                
                fetch("http://localhost:8080/doctor/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                })
                .then(response => {
                    if (response.headers.get("content-type")?.includes("application/json")) {
                        return response.json();
                    } else {
                        return response.text();
                    }
                })
                .then(data => {
                    console.log("Success:", data);
                    alert("Registration successful!");
                    form1E1.reset();
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("Registration failed. Please try again.");
                });
            }
        });
