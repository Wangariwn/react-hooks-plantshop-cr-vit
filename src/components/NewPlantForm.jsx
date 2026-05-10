function NewPlantForm({ plants, setPlants }) {
  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name: e.target.elements.name.value,
      image: e.target.elements.image.value,
      price: e.target.elements.price.value,
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((addedPlant) => {
        setPlants([...plants, addedPlant]);
      });

    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Plant name" />

      <input name="image" placeholder="Image URL" />

      <input name="price" placeholder="Price" />

      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;