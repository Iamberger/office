import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type SideBarItem = {
  id: number;
  active_icon: string;
  inactive_icon: string;
  title: string;
  active: boolean;
  href: string;
  subItems?: SideBarItem[];
  permission: string;
};

interface SidebarILocalState {
  items: SideBarItem[];
}

const initialState: SidebarILocalState = {
  items: [
    {
      id: 1,
      title: "خانه",
      active_icon: "",
      inactive_icon: "",
      active: true,
      href: "/dashboard",
      permission: "GET_MINI_PROFILE",
    },
  ],
};

function checkIsSubItem(items: SideBarItem[], itemId: number): number {
  for (const item of items) {
    if (item.id === itemId) {
      return item.id;
    } else if (item.active) {
      item.active = false;
    }
    if (item.subItems) {
      const parentId = checkIsSubItem(item.subItems, itemId);
      if (parentId !== -1) {
        return parentId;
      }
    }
  }
  return -1;
}

function getParentsId(
  items: SideBarItem[],
  itemId: number,
  parentsId: number[] = []
): number[] {
  for (const item of items) {
    if (item.id === itemId) {
      item.active = true;
      if (item.subItems) {
        item.subItems[0].active = true;
      }
      return parentsId;
    }
    if (item.subItems) {
      const parentId = checkIsSubItem(item.subItems, itemId);
      if (parentId !== -1) {
        parentsId.push(item.id);
        return getParentsId(item.subItems, itemId, parentsId);
      }
    }
  }
  return [];
}

function resetAllActiveStates(items: SideBarItem[]) {
  // reset all active states recursively
  items.map((item) => {
    item.active = false;
    if (item.subItems) {
      resetAllActiveStates(item.subItems);
    }
  });
}

function updateParentsState(items: SideBarItem[], itemId: number) {
  items.map((item) => {
    if (item.id === itemId) {
      item.active = true;
    }
    if (item.subItems) {
      updateParentsState(item.subItems, itemId);
    }
  });
}

export const SidebarSlice = createSlice({
  name: "Sidebar",
  initialState,
  reducers: {
    setActive: (state, action) => {
      resetAllActiveStates(state.items);
      let parents = getParentsId(state.items, action.payload);
      parents.map((id) => {
        // do this recursively
        updateParentsState(state.items, id);
      });
    },
    resetAllSidebarSliceStates: () => initialState,
  },
  extraReducers: (builder) => {},
});

export const { resetAllSidebarSliceStates, setActive } = SidebarSlice.actions;
