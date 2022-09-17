import { Box } from '@mui/material'
import { styles } from './TextBox.styles'

interface IProps {
  children: React.ReactNode
}

const TextBox: React.FC<IProps> = ({ children }) => {
  return (
    <Box component="span" sx={styles.textBox}>
      {children}
    </Box>
  )
}

export default TextBox
