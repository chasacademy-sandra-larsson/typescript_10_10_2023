type AccessLevel = "User" | "SuperUser" | "Admin";

type User = {
    id: number;
    name?: string;
    accessLevel: AccessLevel
}

type SuperUser = User & {
    superPower: string;
}

// Partial returnerar en ny typ med alla properties optional
type PartialUser = Partial<User>

const user1: PartialUser = {}

// Required returnerar en ny typ och gör alla properties required (? => inget frågetecken)

type RequiredUser = Required<User>

const user2: RequiredUser = {
    id: 1,
    name: "Sandra",
    accessLevel: "SuperUser"
}

// Omit tar bort specifierade properties från grundtypen

type UserWithoutName = Omit<User, "name">
type UserWithoutNameId = Omit<User, "name" | "id">

const user3: UserWithoutName = {
    id: 2,
    name: "The girl has no name", // Not ok
    accessLevel: "Admin"
}

// Pick plockar ut de properties man vill ha
type UserWithOnlyName = Pick<User, "name">
