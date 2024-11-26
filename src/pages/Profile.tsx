import { useContext } from "react"
import { CardComponent, Header, StyledButton } from "@/components"
import { AppThemeContext } from "@/contexts/AppThemeConstext"

function Profile() {
    const themeContext = useContext(AppThemeContext)
    return (
        <>
            <Header />
            <CardComponent>
                <StyledButton className="primary" onClick={themeContext?.toggledTheme}>
                    Trocar para tema {themeContext?.apptheme === 'light' ? 'escuro' : 'claro'}
                </StyledButton>
            </CardComponent>
        </>
    )
}

export default Profile