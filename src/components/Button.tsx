interface ButtonProps {
  text: string;
  onClick: () => void; // Typ för onClick-funktionen (inga parametrar, ingen retur)
  styleClass: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, styleClass }) => {
  return (
    <button className={`btn ${styleClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
