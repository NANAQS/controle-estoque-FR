import Agendamento_CustomDrawerDefault from "../../components/Agendamento_customDefaultDrawer";

type Props = {};

function Agendamento_HomeScreen({}: Props) {
  return (
    <Agendamento_CustomDrawerDefault
      double={[
        {
          anchor: "right",
          listNameUsers: [1, 2, 3, 4].map((item) => "Joao"),
          listPhotosUsers: [
            "https://xsgames.co/randomusers/avatar.php?g=male",
            "https://xsgames.co/randomusers/avatar.php?g=female",
            "https://xsgames.co/randomusers/avatar.php?g=male",
            "https://xsgames.co/randomusers/avatar.php?g=male",
          ],
        },
      ]}
    >
      OK
    </Agendamento_CustomDrawerDefault>
  );
}

export default Agendamento_HomeScreen;
