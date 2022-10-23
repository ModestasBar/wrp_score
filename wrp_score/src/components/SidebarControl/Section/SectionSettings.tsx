import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  SelectChangeEvent,
} from '@mui/material';
import { AttemptName, GameName } from '../../../dto/game.dto';
import { GameCategory } from '../../../dto/general.dto';
import { useAppDispatch, useAppSelector } from '../../../hooks/store.hooks';
import {
  changeAttempt,
  changeCategory,
  changeGame,
} from '../../../modules/competitionSlice';

const SectionSettings = () => {
  const dispatch = useAppDispatch();

  const selectFields = [
    {
      label: 'Game',
      value: useAppSelector((store) => store.competitionDetails.gameName),
      menuItems: [
        {
          value: GameName.Game_1,
          text: 'Game 1',
        },
        {
          value: GameName.Game_2,
          text: 'Game 2',
        },
        {
          value: GameName.Game_3,
          text: 'Game 3',
        },
        {
          value: GameName.Game_4,
          text: 'Game 4',
        },
      ],
      handleSelect: (e: SelectChangeEvent) => {
        dispatch(changeGame(e.target.value as GameName));
      },
    },

    {
      label: 'Category',
      value: useAppSelector((store) => store.competitionDetails.category),
      menuItems: [
        {
          value: GameCategory.CATEGORY_1,
          text: 'Category 1',
        },
        {
          value: GameCategory.CATEGORY_2,
          text: 'Category 2',
        },
        {
          value: GameCategory.CATEGORY_3,
          text: 'Category 3',
        },
        {
          value: GameCategory.CATEGORY_4,
          text: 'Category 4',
        },
      ],
      handleSelect: (e: SelectChangeEvent) => {
        dispatch(changeCategory(e.target.value as GameCategory));
      },
    },
  ];

  const toggleAttemptConfig = [
    {
      value: useAppSelector((store) => store.competitionDetails.attempt),
      options: [
        {
          text: 'S1',
          value: AttemptName.S_1,
        },
        {
          text: 'S2',
          value: AttemptName.S_2,
        },
        {
          text: 'S3',
          value: AttemptName.S_3,
        },
      ],
      handleToggle: (
        _: React.MouseEvent<HTMLElement>,
        attempt: AttemptName
      ) => {
        dispatch(changeAttempt(attempt));
      },
    },
  ];

  return (
    <>
      <Typography variant="h5" align="center" sx={{ p: '15px' }}>
        Settings
      </Typography>
      <Divider />
      <Box p={1}>
        {selectFields.map(
          ({ menuItems, label, handleSelect, value }, index) => (
            <Box display="flex" key={index} alignItems="center" mt={2}>
              <FormControl sx={{ width: '100%' }} size="small">
                <InputLabel>{label}</InputLabel>
                <Select label={label} onChange={handleSelect} value={value}>
                  {menuItems.map(({ text, value }, index) => (
                    <MenuItem key={index} value={value}>
                      {text}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )
        )}
        <InputLabel sx={{ marginTop: '16px' }}>Attempt</InputLabel>
        {toggleAttemptConfig.map(({ handleToggle, options, value }, index) => (
          <ToggleButtonGroup
            key={index}
            exclusive
            color="primary"
            fullWidth
            onChange={handleToggle}
            value={value}
          >
            {options.map(({ text, value }, index) => (
              <ToggleButton key={index} value={value}>
                {text}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        ))}
      </Box>
    </>
  );
};

export default SectionSettings;
