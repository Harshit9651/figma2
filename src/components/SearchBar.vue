<!-- SearchBar.vue -->
<template>
    <div class="search-box">
      <div class="input-with-dropdown">
        <select class="dropdown">
          <option value="all" class="all">ALL</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <input type="text" placeholder="Search 5764 3D Models.." />
      </div>
    </div>
  </template>
  
  <style scoped>
  .search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .input-with-dropdown {
    position: relative;
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
  }
  
  .dropdown {
    width: 5rem;
    height: 100%;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 32px 0 0 32px;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
  }
  
  input {
    width: calc(100% - 120px);
    height: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 0 32px 32px 0;
    outline: none;
    box-sizing: border-box;
  }
  </style>
  