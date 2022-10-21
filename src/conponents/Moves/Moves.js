import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeToggler"
import { MovesSection, Title, List, Item } from "./stye"

const Moves = ({ movesList }) => {

    const { theme } = useContext(ThemeContext)

    return (
        <MovesSection>
            <Title style={{color: theme.color}}>Moves</Title>
            <List>
                {
                    movesList.map((moves, index) =>
                        <Item key={index}>
                            {moves.move.name ?? 'cade o nome do movimento?'}
                        </Item>
                    )
                }
            </List>
        </MovesSection>
    )
}

export default Moves