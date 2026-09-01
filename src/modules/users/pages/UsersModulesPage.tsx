import ModulesGrid from "../components/organisms/ModulesGrid";
import UserProfilePanel from "../components/organisms/UserProfilePanel";

export default function UsersModulesPage() {
    return(
        <div className="flex flex-row ">
            <div className="w-full">
                <ModulesGrid />
            </div>
            <UserProfilePanel />
        </div>
    )
}