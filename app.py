from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample data
writers = [
    {'id': 1, 'name': 'Alice', 'blogs': ['Blog 1 by Alice', 'Blog 2 by Alice'], 'comments': ['Great blog!', 'Very informative.']},
    {'id': 2, 'name': 'Bob', 'blogs': ['Blog 1 by Bob', 'Blog 2 by Bob'], 'comments': ['Awesome!', 'Nice read.']},
    {'id': 3, 'name': 'Charlie', 'blogs': ['Blog 1 by Charlie', 'Blog 2 by Charlie'], 'comments': ['Excellent!', 'Loved it.']},
    {'id': 4, 'name': 'Daisy', 'blogs': ['Blog 1 by Daisy', 'Blog 2 by Daisy'], 'comments': ['Wonderful!', 'So helpful.']}
]

@app.route('/')
def main():
    return render_template('main.html')

@app.route('/explore')
def explore():
    return render_template('explore.html')

@app.route('/fashion_blogs')
def fashion_blogs():
    return render_template('fashion_blogs.html', writers=writers)

@app.route('/writer/<int:writer_id>')
def writer_profile(writer_id):
    writer = next((w for w in writers if w['id'] == writer_id), None)
    return render_template('writer_profile.html', writer=writer)

@app.route('/search', methods=['POST'])
def search():
    query = request.form['query']
    search_results = [writer for writer in writers if query.lower() in writer['name'].lower()]
    return render_template('fashion_blogs.html', writers=search_results)

@app.route('/personal_wardrobe')
def personal_wardrobe():
    return render_template('personal_wardrobe.html')

@app.route('/recommendations')
def recommendations():
    # Sample recommendations data
    recommendations = [
        {'image': 'https://via.placeholder.com/150', 'title': 'THE FORMAL CLUB', 'price': '₹999', 'discount': '25% OFF', 'final_price': '₹749'},
        {'image': 'https://via.placeholder.com/150', 'title': 'Van Heusen', 'price': '₹1,599', 'discount': '20% OFF', 'final_price': '₹1,279'},
        {'image': 'https://via.placeholder.com/150', 'title': 'Brand 3', 'price': '₹1,299', 'discount': '15% OFF', 'final_price': '₹1,104'},
        {'image': 'https://via.placeholder.com/150', 'title': 'Brand 4', 'price': '₹1,199', 'discount': '10% OFF', 'final_price': '₹1,079'}
    ]
    return render_template('recommendations.html', recommendations=recommendations)

if __name__ == '__main__':
    app.run(debug=True)
