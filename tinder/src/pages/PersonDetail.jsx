function PersonDetail() {
    return (
        <section class="block">
            <div class="container">
                <div class="user-card">
                    <img
                        src="https://i.pravatar.cc/300"
                        alt="Fullname"
                        class="user-card__avatar"
                    />
                    <h1 class="user-card__title">Fullname</h1>
                    <div class="user-card__body">
                        <div class="card-body__item">
                            <strong>Возраст:</strong>
                            <span>age</span>
                        </div>
                        <div class="card-body__item">
                            <strong>Пол:</strong>
                            <span>gender</span>
                        </div>
                        <div class="card-body__item">
                            <strong>WhatsApp:</strong>
                            <span>whatsapp</span>
                        </div>
                        <div class="card-body__item">
                            <strong>Instagram:</strong>
                            <span>insta</span>
                        </div>
                    </div>
                    <div class="user-card-description">
                        <h5 class="user-card-desc__title">О себе:</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PersonDetail