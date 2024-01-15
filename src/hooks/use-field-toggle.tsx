import * as React from "react";

const TOGGLE_BG_IMAGE = "TOGGLE_BG_IMAGE" as const;
const TOGGLE_PROFILE_IMAGE = "TOGGLE_PROFILE_IMAGE" as const;
const TOGGLE_PROFILE = "TOGGLE_PROFILE" as const;
const TOGGLE_PORTFOLIO = "TOGGLE_PORTFOLIO" as const;

type TogglePortfolioPayload = {
  type: typeof TOGGLE_PORTFOLIO;
  payload: number;
};

const toggleBgImage = () => ({ type: TOGGLE_BG_IMAGE });
const toggleProfileImage = () => ({ type: TOGGLE_PROFILE_IMAGE });
const toggleProfile = () => ({ type: TOGGLE_PROFILE });
const togglePortfolio = (formId: number): TogglePortfolioPayload => ({
  type: TOGGLE_PORTFOLIO,
  payload: formId,
});

export type InitialToggleState = {
  bgImageShow: boolean;
  profileImageShow: boolean;
  profileShow: boolean;
  portofolioShow: { [key: number]: boolean };
};

const initialToggleState: InitialToggleState = {
  bgImageShow: true,
  profileImageShow: true,
  profileShow: true,
  portofolioShow: (() => {
    const initialState: { [key: number]: boolean } = {};
    const formIds = Array.from(Array(9).keys());
    formIds.forEach((formId) => {
      initialState[formId] = true;
    });
    return initialState;
  })(),
};

const getInitialStateFromLocalStorage = (): InitialToggleState | null => {
  if (typeof localStorage !== "undefined") {
    const storedState = localStorage.getItem("fieldToggleState");
    return storedState ? JSON.parse(storedState) : null;
  }
  return null;
};

const reducer = (
  state: InitialToggleState,
  action:
    | ReturnType<typeof toggleBgImage>
    | ReturnType<typeof toggleProfileImage>
    | ReturnType<typeof toggleProfile>
    | TogglePortfolioPayload
): InitialToggleState => {
  const newState = (() => {
    switch (action.type) {
      case TOGGLE_BG_IMAGE:
        return { ...state, bgImageShow: !state.bgImageShow };
      case TOGGLE_PROFILE_IMAGE:
        return { ...state, profileImageShow: !state.profileImageShow };
      case TOGGLE_PROFILE:
        return { ...state, profileShow: !state.profileShow };
      case TOGGLE_PORTFOLIO:
        return {
          ...state,
          portofolioShow: {
            ...state.portofolioShow,
            [action.payload]: !state.portofolioShow[action.payload],
          },
        };
      default:
        return state;
    }
  })();

  // Update localStorage whenever the state changes
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("fieldToggleState", JSON.stringify(newState));
  }

  return newState;
};

export const useFieldToggle = () => {
  const initialLocalStorageState = getInitialStateFromLocalStorage();
  const [state, dispatch] = React.useReducer(
    reducer,
    initialLocalStorageState || initialToggleState
  );

  const actions = {
    toggleBgImage: () => dispatch(toggleBgImage()),
    toggleProfileImage: () => dispatch(toggleProfileImage()),
    toggleProfile: () => dispatch(toggleProfile()),
    togglePortfolio: (formId: number) => dispatch(togglePortfolio(formId)),
  };

  return { state, actions };
};
