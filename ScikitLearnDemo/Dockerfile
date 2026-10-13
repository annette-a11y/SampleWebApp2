# Use Python as the base image
FROM python:3.12-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install Scikit-learn
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Python program
COPY scikit_demo.py .

# Run the program
CMD ["python", "-u", "scikit_demo.py"]
