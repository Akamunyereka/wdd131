// ================================
// WORKOUT DATA (OBJECT + ARRAYS)
// ================================

const workoutPlans = {
    beginner: [
        { name: "Push Ups", duration: "10 reps" },
        { name: "Bodyweight Squats", duration: "15 reps" },
        { name: "Plank", duration: "30 seconds" }
    ],
    intermediate: [
        { name: "Bench Press", duration: "3 sets x 10 reps" },
        { name: "Deadlifts", duration: "3 sets x 8 reps" },
        { name: "Pull Ups", duration: "3 sets x 6 reps" }
    ]
};

// ================================
// FUNCTION 1: DISPLAY WORKOUTS
// ================================

function displayWorkouts(level) {
    const container = document.querySelector("#workout-container");

    if (!container) return;

    container.innerHTML = "";

    const selectedWorkouts = workoutPlans[level];

    selectedWorkouts.forEach(workout => {
        container.innerHTML += `
            <div class="card">
                <h3>${workout.name}</h3>
                <p>${workout.duration}</p>
            </div>
        `;
    });
}

// ================================
// FUNCTION 2: SAVE PREFERENCE
// ================================

function savePreference(level) {
    localStorage.setItem("fitnessLevel", level);
}

// ================================
// FUNCTION 3: LOAD SAVED PREFERENCE
// ================================

function loadPreference() {
    const saved = localStorage.getItem("fitnessLevel");
    const select = document.querySelector("#levelSelect");

    if (saved && select) {
        select.value = saved;
        displayWorkouts(saved);
    }
}

// ================================
// EVENT LISTENER FOR DROPDOWN
// ================================

const levelSelect = document.querySelector("#levelSelect");

if (levelSelect) {
    levelSelect.addEventListener("change", (event) => {
        const selectedLevel = event.target.value;

        // CONDITIONAL BRANCHING
        if (selectedLevel === "beginner" || selectedLevel === "intermediate") {
            displayWorkouts(selectedLevel);
            savePreference(selectedLevel);
        } else {
            document.querySelector("#workout-container").innerHTML = "";
        }
    });
}

// ================================
// CONTACT FORM HANDLING
// ================================

const form = document.querySelector("#contactForm");

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const goal = document.querySelector("#goal").value.trim();
        const confirmation = document.querySelector("#confirmation");

        if (name !== "" && email !== "" && goal !== "") {

            const submission = {
                name,
                email,
                goal
            };

            localStorage.setItem("contactSubmission", JSON.stringify(submission));

            confirmation.textContent = `Thank you ${name}! Your fitness goals have been received. A trainer will contact you at ${email}.`;

            form.reset();

        } else {
            confirmation.textContent = `Please complete all required fields before submitting.`;
        }
    });
}

// ================================
// INITIAL LOAD
// ================================

document.addEventListener("DOMContentLoaded", () => {
    loadPreference();
});
