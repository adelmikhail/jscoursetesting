// To take the feedback from the user survey form
function submitFeedback() {
    // 1️⃣ Get the input values first
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // 2️⃣ Then display them in the output area
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // 3️⃣ Make sure the feedback section is visible
    document.getElementById('userInfo').style.display = 'block';

    // 4️⃣ Thank the user
    alert('Thank you for your valuable feedback');
}

// 5️⃣ Attach the event handler
document.getElementById('submitBtn').onclick = submitFeedback;