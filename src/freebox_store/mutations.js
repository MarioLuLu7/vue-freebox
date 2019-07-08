export default {
  SET_TOPBAR_TOP(state, data) {
    state.topbar_top = data;
  },
  SET_MY_MAP(state, data) {
    state.myMap = data;
  },
  SET_INFOBOXP(state, data) {
    state.infobox = data;
  },
  SET_MY_MAP_CONTENT(state, data) {
    state.myMapContent = data;
  },
  SET_MY_MAP_TYPE(state, data) {
    state.myMapType = data;
  },
  AAA_MY_REFS(state, data) {
    let arr = [];
    if (state.my_refs.length) {
      state.my_refs.forEach(item => {
        if (item.type !== data[0].type) {
          arr.push(item);
        }
      });
    }
    data.forEach(item => {
      if (item.ref) {
        arr.push(item);
      }
    });
    state.my_refs = arr;
  },
  SET_DEFAULT_BOX_LIST(state, data) {
    state.default_box_list = data;
  },
  SET_FIXED_BOX_LIST(state, data) {
    state.fixed_box_list = data;
  },
  SET_MAP_BOX_LIST(state, data) {
    state.map_box_list = data;
  },
  DELETE_DEFAULT_BOX_LIST(state, data) {
    state.default_box_list.forEach((item, i) => {
      if (data === item.id) {
        state.default_box_list.splice(i, state.default_box_list.length - i);
      }
    });
  },
  DELETE_FIXED_BOX_LIST(state, data) {
    state.fixed_box_list.forEach((item, i) => {
      if (data === item.id) {
        state.fixed_box_list.splice(i, 1);
      }
    });
  },
  DELETE_MAP_BOX_LIST(state, data) {
    state.map_box_list.forEach((item, i) => {
      if (data === item.id) {
        state.map_box_list.splice(i, 1);
      }
    });
  },
  DELETE_DEFAULT_BOX_FROM_LIST(state, data) {
    state.default_box_list.forEach((item, i) => {
      if (data === item.from) {
        state.default_box_list.splice(i, 1);
      }
    });
  },
  SET_MAP_SHOW(state, data) {
    state.mapshow = data;
  },
  DELETE_SON_DEFAULT_BOX_LIST(state, data) {
    state.default_box_list.forEach((item, i) => {
      if (data === item.id) {
        state.default_box_list.splice(i + 1, state.default_box_list.length - i);
      }
    });
  }
};
