from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Sample data
writers = [
    {'id': 1, 'name': 'Alice', 'blogs': ['Blog 1 by Alice', 'Blog 2 by Alice'], 'comments': ['Great blog!', 'Very informative.']},
    {'id': 2, 'name': 'Bob', 'blogs': ['Blog 1 by Bob', 'Blog 2 by Bob'], 'comments': ['Awesome!', 'Nice read.']}
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

if __name__ == '__main__':
    app.run(debug=True)
