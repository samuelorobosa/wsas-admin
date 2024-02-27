import './Users.css';
export default function Users() {
    return (
        <>
            <nav className="appbar">
                <h1 className="appbar-title">Users</h1>
            </nav>
            <section className="users__content">
                <table className="users__table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Account ID</th>
                        <th>Wallet Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="S/N">xxxx</td>
                        <td data-label="Payer">John Doe</td>
                        <td data-label="Amount Paid">john_doe</td>
                        <td data-label="Amount Credited">johndoe@gmail.com</td>
                        <td data-label="Account Paid to">999-999-999</td>
                        <td data-label="Date">1234567890</td>
                        <td data-label="Rate">$90</td>
                    </tr>
                    <tr>
                        <td data-label="S/N">xxxx</td>
                        <td data-label="Payer">John Doe</td>
                        <td data-label="Amount Paid">john_doe</td>
                        <td data-label="Amount Credited">johndoe@gmail.com</td>
                        <td data-label="Account Paid to">999-999-999</td>
                        <td data-label="Date">1234567890</td>
                        <td data-label="Rate">$90</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}
