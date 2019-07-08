export default {
  setTopbarTop({ commit }, data) {
    commit("SET_TOPBAR_TOP", data);
  },
  setMyMap({ commit }, data) {
    commit("SET_MY_MAP", data.map);
    commit("SET_MY_MAP_TYPE", data.type);
  },
  setInfoBox({ commit }, data) {
    commit("SET_INFOBOXP", data.infobox);
  },
  setMyMapContent({ commit }, data) {
    commit("SET_MY_MAP_CONTENT", data);
  },
  addRefs({ commit }, data) {
    commit("AAA_MY_REFS", data);
  },
  changeMapShow({ commit, state }) {
    commit("SET_MAP_SHOW", !state.mapshow);
  },
  trigger({ state }, data) {
    state.my_refs.forEach(item => {
      if (item.id === data.id) {
        if (item.ref[data.method]) {
          item.ref[data.method](data.params);
        }
      }
    });
  },
  deleteBox({ commit }, data) {
    commit("DELETE_DEFAULT_BOX_LIST", data);
    commit("DELETE_FIXED_BOX_LIST", data);
    commit("DELETE_MAP_BOX_LIST", data);
  },
  deleteSonBox({ commit }, data) {
    commit("DELETE_SON_DEFAULT_BOX_LIST", data);
  },
  addDefaultBox({ commit, state }, data) {
    if (data.from) {
      commit("DELETE_SON_DEFAULT_BOX_LIST", data.from);
      // commit("DELETE_DEFAULT_BOX_FROM_LIST", data.from);
    }
    let boxdata = {
      id: data.id,
      name: data.name,
      width: data.width,
      params: data.params,
      from: data.from || ""
    };
    let temp = false;
    let temparr = JSON.parse(JSON.stringify(state.default_box_list));
    temparr.forEach(item => {
      if (item.id == data.id) {
        item = boxdata;
        temp = true;
        state.refreshid = data.id;
        setTimeout(() => {
          state.refreshid = "";
        }, 0);
      }
    });
    if (!temp) {
      temparr.push(boxdata);
    }
    commit("SET_DEFAULT_BOX_LIST", temparr);
  },
  addFixedBox({ commit, state }, data) {
    let boxdata = {
      id: data.id,
      name: data.name,
      width: data.width,
      height: data.height,
      position: data.position,
      move: data.move,
      params: data.params
    };
    let temp = false;
    let temparr = JSON.parse(JSON.stringify(state.fixed_box_list));
    temparr.forEach(item => {
      if (item.id == data.id) {
        item = boxdata;
        temp = true;
        state.refreshid = data.id;
        setTimeout(() => {
          state.refreshid = "";
        }, 0);
      }
    });
    if (!temp) {
      temparr.push(boxdata);
    }
    commit("SET_FIXED_BOX_LIST", temparr);
  },
  addMapBox({ commit, state }, data) {
    let boxdata = {
      id: data.id,
      name: data.name,
      width: data.width,
      height: data.height,
      lonlat: data.lonlat
    };
    let temp = false;
    let temparr = JSON.parse(JSON.stringify(state.map_box_list));
    temparr.forEach(item => {
      if (item.id == data.id) {
        item = boxdata;
        temp = true;
        // state.refreshid = data.id
        // setTimeout(() => {
        //   state.refreshid = ''
        // }, 0)
      }
    });
    if (!temp) {
      temparr.push(boxdata);
    }
    commit("SET_MAP_BOX_LIST", temparr);
  }
};
