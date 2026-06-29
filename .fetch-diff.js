import https from 'https';
import fs from 'fs';

const options = {
    hostname: 'api.github.com',
    path: '/repos/djsiddz/space-ahead/compare/ffcf7474bc4a4e350614cf289362b82760caf23e...main',
    headers: {
        'User-Agent': 'Node.js'
    }
};

https.get(options, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        fs.writeFileSync('.diff.json', data);
        const json = JSON.parse(data);
        if (json.files) {
            json.files.forEach(f => {
                console.log(f.status + ': ' + f.filename);
            });
        } else {
            console.log("No files found or error:", json);
        }
    });
}).on('error', (err) => {
    console.log('Error: ' + err.message);
});
