const dns = require('dns');

// 1. Resolving a domain to an IP address
dns.resolve4('www.example.com', (err, addresses) => {
    if (err) {
        console.error('Error resolving domain:', err);
        return;
    }

    console.log('Resolved IP addresses:', addresses);
});

// 2. Reverse lookup of an IP address to a domain
dns.reverse('8.8.8.8', (err, domains) => {
    if (err) {
        console.error('Error performing reverse lookup:', err);
        return;
    }

    console.log('Reverse lookup domains:', domains);
});

// 3. Getting information about the local machine
const localhostInfo = dns.getServers();
console.log('Local DNS servers:', localhostInfo);
