import SearchBar from "../UsersList/SearchBar.jsx"
import Table from "./Table";

const UserList = () => {
    return (
        <section className="card users-container">
            <SearchBar />
            <Table />
        </section>
    );
};

export default UserList;