<div className="area">
    <h3>Ingredientes:</h3>
    <input
        className="desc"
        type="text"
        disabled={disabled}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
    />
</div>