document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
            
            data.forEach(user => {
                const row = usersTable.insertRow();

                // Insert UserName
                const userNameCell = row.insertCell(0);
                userNameCell.textContent = user.username;

                // Insert Email
                const emailCell = row.insertCell(1);
                emailCell.textContent = user.email;

                // Insert Company Name
                const companyNameCell = row.insertCell(2);
                companyNameCell.textContent = user.company.name;

                // Insert Address Geo
                const addressGeoCell = row.insertCell(3);
                addressGeoCell.textContent = 'Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}';
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
