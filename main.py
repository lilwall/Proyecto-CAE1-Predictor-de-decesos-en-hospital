from flask import Flask, render_template, request
from flask_bootstrap import Bootstrap
from joblib import load

model = load('RandomForest.joblib')

app = Flask(__name__)
bootstrap = Bootstrap(app)


@app.route("/")
def home():
  return render_template("index.html")


@app.route("/variables")
def variables():
  return render_template("variables.html")


@app.route('/results')
def results():
  Gendera = float(request.args.get("Gendera"))
  Hypertensive = float(request.args.get("Hypertensive"))
  Deficiencyanemias = float(request.args.get("Deficiencyanemias"))
  Depression = float(request.args.get("Depression"))
  Hyperlipemia = float(request.args.get("Hyperlipemia"))
  Renal_Failure = float(request.args.get("Renal_Failure"))
  COPD = float(request.args.get("COPD"))
  Temperature = float(request.args.get("Temperature"))
  RBC = float(request.args.get("RBC"))
  MCHC = float(request.args.get("MCHC"))
  INR = float(request.args.get("INR"))
  Blood_calcium = float(request.args.get("Blood_calcium"))
  Anion_gap = float(request.args.get("Anion_gap"))
  Magnesium_ion = float(request.args.get("Magnesium_ion"))
  PH = float(request.args.get("PH"))
  Lactic_acid = float(request.args.get("Lactic_acid"))
  
  array = [[
        Gendera, Hypertensive, Deficiencyanemias, Depression, Hyperlipemia,
        Renal_Failure, COPD, Temperature, RBC, MCHC, INR, Blood_calcium,
        Anion_gap, Magnesium_ion, PH, Lactic_acid
    ]]
  
  return render_template("results.html",result=' Bajo con una certeza de 88%' if model.predict(array)[0] == 1 else ' Alto con una certeza de 88%')


if __name__ == '__main__':
  from waitress import serve
  serve(app, host="0.0.0.0", port=8080)
  ##app.run("0.0.0.0", port=8080)
