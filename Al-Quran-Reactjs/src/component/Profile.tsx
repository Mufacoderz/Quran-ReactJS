type ProfileProps = {
    greeting: string;
    name: string;
    avatar: string;
}

function Profile ({greeting, name, avatar}: ProfileProps){
    return(
        <div>
            <div>
                <p>{greeting}</p>
                <p>{name}</p>
            </div>
            <img src={avatar} alt="Profile user" />
        </div>
    )
}

export default Profile;