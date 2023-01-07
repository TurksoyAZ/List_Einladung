import User from "./User"
import './Users.css'

function Users({ items, searchValue, onChangeSearchValue, invites, onClickInvite, onclickSendInvites }) {

    console.log(searchValue);
    return (
        <section className="usersContainer">

            <input type="text"
                value={searchValue}
                onChange={onChangeSearchValue}
                placeholder="Search..." />

            <div className='dataContainer'>
                {items.filter((obj) => {
                    return (
                        obj.first_name.toLowerCase().includes(searchValue)
                    )
                }).map((obj, index) => (
                    <User
                        key={obj.id}  {...obj}
                        isInvited={invites.includes(obj.id)}
                        onClickInvite={onClickInvite} />
                ))}
            </div>


            {invites.length > 0 && (
                <button onClick={onclickSendInvites}>Send Einladung</button>
            )}
        </section>
    )
}

export default Users
