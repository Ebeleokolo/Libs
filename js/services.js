// services.js
document.addEventListener('DOMContentLoaded', function() {
    // Management Team Data
    const managementTeam = [
        { name: 'Ahidjo Hauwa', role: 'CEO', department: 'Executive', image: 'assets/images/Hauwa.jpg' },
        { name: 'Ebele Okolo', role: 'CTO', department: 'Technology', image: 'assets/images/lynn.jpg' },
        { name: 'Viyama Philemon', role: 'CFO', department: 'Finance', image: 'assets/images/Viyama.jpg' }
    ];

    // Units Data
    const units = [
        {
            name: 'Technology',
            head: 'Ebele Lynda Okolo',
            activities: [
                'Software Development',
                'IT Infrastructure Management',
                'Cybersecurity Implementation'
            ]
        },
        {
            name: 'Marketing',
            head: 'Viyama Philemon',
            activities: [
                'Brand Management',
                'Digital Marketing Campaigns',
                'Market Research'
            ]
        },
        {
            name: 'Finance',
            head: 'Ahidjo Hauwa',
            activities: [
                'Financial Planning',
                'Budget Management',
                'Investment Strategy'
            ]
        }
    ];

    // Render Management Team
    const managementTeamContainer = document.getElementById('managementTeam');
    managementTeam.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'team-member';
        memberElement.innerHTML = `
            <div class="member-image-container">
                <img src="${member.image}" alt="${member.name}" class="member-image">
            </div>
            <h3 class="member-name">${member.name}</h3>
            <p class="member-role">${member.role}</p>
            <p class="member-department">${member.department}</p>
        `;
        managementTeamContainer.appendChild(memberElement);
    });

    // Render Organizational Units
    const unitsContainer = document.getElementById('organizationalUnits');
    units.forEach(unit => {
        const unitElement = document.createElement('div');
        unitElement.className = 'unit-card';
        unitElement.innerHTML = `
            <h3 class="unit-title">${unit.name}</h3>
            <p class="unit-head">Unit Head: ${unit.head}</p>
            <div>
                <h4 class="activities-title">Key Activities</h4>
                <ul class="activities-list">
                    ${unit.activities.map(activity => `
                        <li class="activity-item">${activity}</li>
                    `).join('')}
                </ul>
            </div>
        `;
        unitsContainer.appendChild(unitElement);
    });
});