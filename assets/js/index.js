const [...bookmarks] = document.getElementsByTagName('a');
createTableWithBookmarks(bookmarks);

function createTableWithBookmarks(bookmarks) {
    const root = document.getElementById('root');
    root.appendChild(document.createElement('table'));
    const [table] = document.getElementsByTagName('table');
    for (let link of bookmarks) {
        const newRow = table.insertRow(-1);
        const hrefCell = newRow.insertCell(-1);

        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.href;
        hrefCell.appendChild(a);

        const descriptionCell = newRow.insertCell(-1);
        const descriptionTextNode = document.createTextNode(link.textContent);
        descriptionCell.appendChild(descriptionTextNode);
    }
}