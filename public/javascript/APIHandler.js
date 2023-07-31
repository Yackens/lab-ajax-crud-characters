class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    return await axios.get(`${this.BASE_URL}/characters`);
  }

  async getOneRegister(id) {
    return await axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  async createOneRegister(newCharacter) {
    return await axios.post(`${this.BASE_URL}/characters`, newCharacter);
  }

  async updateOneRegister(id, updatedInfo) {
    return await axios.patch(`${this.BASE_URL}/characters/${id}`, updatedInfo);
  }

  async deleteOneRegister(id) {
    return await axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}