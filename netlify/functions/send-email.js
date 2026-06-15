const RESEND_API_KEY = 're_FvcsFhQ5_GsrEGu97v9PcchL3TabaspCZ';
const LOGO_B64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA8CAYAAAAjW/WRAAABCGlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGA8wQAELAYMDLl5JUVB7k4KEZFRCuwPGBiBEAwSk4sLGHADoKpv1yBqL+viUYcLcKakFicD6Q9ArFIEtBxopAiQLZIOYWuA2EkQtg2IXV5SUAJkB4DYRSFBzkB2CpCtkY7ETkJiJxcUgdT3ANk2uTmlyQh3M/Ck5oUGA2kOIJZhKGYIYnBncAL5H6IkfxEDg8VXBgbmCQixpJkMDNtbGRgkbiHEVBYwMPC3MDBsO48QQ4RJQWJRIliIBYiZ0tIYGD4tZ2DgjWRgEL7AwMAVDQsIHG5TALvNnSEfCNMZchhSgSKeDHkMyQx6QJYRgwGDIYMZAKbWPz9HbOBQAAAelElEQVR4nO2deZhV1ZX2f3uf8U5FUVQxKCgOMWoUiYqaiMYJnDDE2G2MihpFOw4xThHJ0HGIGewoxIxttFvoLzEhBjGI7YA4AQoGcWgjJg6gYIHUfOczre+PU3XlUlVEpRQKeJ9nP8+956y7h3v2Omvvtdd+txIRtjcsXLhQ1q5dy9ChQxk7dqwCWLJkiRQKBY4++mjV1+Ud+rnD5K9//StKKcIgwDBNwiAA4OQJE3jgL3P7vMwd6BuYW7oCnyTmz58vN910E8uWLcOyLHzfJ5VKSTqdpr29Hd/3Ofroo2XOnDl91mGnTL1Oli5Zwt777MO4ceMIgoBcLofjOAwdOpSTTz65r4ragY8DIrJdpDlz5sjw4cPFNE0xDEMASaVSAsiAAQNEay2AxH9J35X7r185XdI1Gfn+Ddf3ab470ieT9JZVz08Gt99+u1xyySWsXr2aIAhQKjYQ+XwepRTt7e1EUYTWmgMPPLBPy87lcuRyOaIo6tN8P24sXLyoMvZ+6JGHt79xeCe2CwX5/ve/T1tbGwBaa8IwxHVdlFKYZjzKtCyLKIr49re/3adl19fXo5TC87w+zffjxBVXXSlHjB0LwC0//Q+ZPHnyFq7RlsM2ryAzZ86UTCZDoVBAKUUURYgIQRAgIvi+j2VZBEGAbds0Nzf3aflhGCJRREtLS5/m+3Fi+m3TlGXbXHb5N2TGjBmMGTNms/P805/vlW9Nubb/WaItPcb7uNP8+fMFENu2xbZtcRxHlFKV+YZt25XvjuPI+PHjpS/Lv+zyb4g2DTn7nEmbzPegMQdLZkBNn5a9OelrF5wvytCCQhY9s3iz6vWr3/xakumUoJAnn35qq2njB0lbvAKfRGpoaKgoBFCZkG+oKIlEQgA58MAD+/QBTv3OtwWFjDu+WvH+9+GHqr7vNHxnQautqgMNHjpE9j9g1GbV56abfyDK0DKooV7mzntgq2nbB01bvAKfRBozZoyYptlNGboUZcN7++67b58+xB/95MeiTUNM25KBg+pEm4YYliko5M7/uqtS1gMPzpN/v/773cr+7V13yvU33lC5PmXqdfKDH97cax2ffPopuX/uX3q8P+cv98u3plxbufetKdf2WOaG6eFHH+nx/tcvuVgWP/uMiAg/+/ntctnl35BnljzbTXbIsKFy2Oc/16f/6SeZtngFPon03e9+V1zXFcuyKi7ejRVDay2GYYhpmjJt2rQ+e6DTb/+ZoBAUctz4cbL/AaNk7JFHyKRzz/lAZRw77jhJZdIyd94DUj+4QdBKUMjCxYt6/L3tOlJXP0i+873vdrv/bxd/XVDIvbP/LCN23aWiqL+75/fdZG+46UaprRsoKGTPvT5VdX/h4kWCQiZfdKFccdWVYruOoJATTz6pz/63rSVt8Qp8Eunpp5+WXXfdtWqY5TiOAGJZliilKtbEcRwZPXp0nz3oGf8zU0zbkqE7Ddtknpd+4zLRptFNZq+9Py0oZPSBn63MCdxkQv583+xusmdNOlsSqaRYji0out3/wtFHCQo5aMzBgkJM2xK0kp/edmuV7GOPL5BBDfWSyqTlnj/+QTa2InfPnCGmbcmBBx8kKCqKtve++1TJ/fS2WyVdk+nRsvSXtM17sQDGjh2rJkyYgGVZlTWQMAwBCIIAwzAq6yDDhg1j+fLlfbaSXl9fT+D7rG1s3KSciBCFIffdP6fK09PW1gZK8cLy5YwcOZKDx4yhVCxiWVa3PH73u98B4HseqO5NCIIgzuuFF9h5+HAOO+wwlFIkEokquTlz5tDc1MTUqVM54/SvqPHHjavKrKOjgyiKeH7ZMlCKs88+G4CBAwdW5VMoFMhlszzzzDObbPvWjO1CQQAmTpxITU1NpWMFQYBlWYhIRWl66nSbiwEDBmCYJoa56aie9vZ2HNfl3Xffrbre3NyM4zhow+Cyyy6jsbER07KwbbtK7j9u/akgwplnnombSIAIi599pkrZWlpaoPPNOHHixPgtGUXU1dVV5bVgwQIAjj322B7r2tTURBSGmJZFfX09o0aNAmDEiBFVcmEYkkylePPNNzfZ9q0Z242CjBs3TokInudVFgejKCKRSOD7PjU1NYgIJ510Up+We/jnPq/CICAMAp5duqTXdQCtNeVSCZFqkTAMKZdK2LbNVVdcqbLZLADHjxtf9Vb/4x//iO04jB49mlKxiDYMVq5cWZVXa2srjusShSG//PkvVC6Xw00kGDJkSJXcK//3f1i2zWGHHNqjJV2/fj3JVIrA95k0aRKZTAagx8XQQj6P67q9/j9bO7YbBbn77rul6wFuOMwqFotkMhk6OjpQSrHLLrv0edm242CYJu3t7b3KdA1zmpqaqq5bloVpWRx++OFA3AkD3+/2++XLl1NbW1uxLK7r8uqrr1bJeJ5HuVTioIMPBuL2l4pF/B7yGzlyZK91dV2XQj4PwG0/vVWtW7cOgFQq1U0O4qFWf8V2oSCLFy+WH/7oRoq5HDVJ0L6PCwwwwQX+ZcJJiIgqlUpqypQpfR56HgQeYRDQ1tbUq4yIoLTuFrPlex5KKc477zwAampqsB2nKlZqzl/ulygMGT16NCtXrsQwTQr5fDeFLBaLKK2ZOHEiEFstwzQrYTgATz79lKBUtyHchsh3Ksc+++4LxMNIeginiaIIwzT7PDrhk8Q2ryALFy+SyRddwMq33qI2AxSgFqgDUgEMdTSnje95rN1XqB00AO3AO2te71XGMAwkirp1MtOy8D2Ps888SwGk02mijeRefvllDNNk5513ZsmSJRUHxFtvvVWdl2kiUcShhx4KQF1dHWEYVjo8gOM4AJTL5cq1kbvvJldefVVFIQ3DAOCQQw6pfDdNky5L0oVkMknYGcLTX7HN7gdZ8twCWfrcMn716xms+NsKRo4YwHlnnULUsZo628AoagzlkA9Myi2vM+8314mbNnGTNoVSnoTrkkjY2I7GNDWu62K6CQwnhXaSWI6LaYKEWaIQIklT9lLsvPsXulmgZDJJS2sb763r3YIkk0mAbm/bwPexOzstxJ36zTfeqIrt8jwPrTWO4/D4449D5zxmxYoVVXk5jkPBNCvDuaFDh4JIlQU57JBDFSKyevVqAGbd+ydZtXIlc+fOZdqttwFQKpWwbLvS8ffYYw8C36dYLFaVl0gkUFqzZs2aXtu9tWObUpD/feBRuW/273li4WOseucdPB+INNpQtLa2E/khEoaUSh6WF2GpHLVJzbq33saPiqQyLgPqB2C5FkYyRYIUuY4ilmtBKoPrp1B+BkMyWDqFqS1cN8QPwSuXKHltvLdqoQzedWyVkgwZvAurV77L6jWtvdZ98ODBAFWdtQsbDrt23313li1bxvLly/mXL58GxG973/OYO3cutm2z3377sWrVqm7KNmjQINrb23nttdc44vCx7LTTTtiOwxNPPMGV37yiIveFo47iySef5Lbp02TevHlow+CEE06o3B85ciS+5/H2228DFYeBvPzyy1XlJRIJLMuitbX3dm/t6PdDrIcXPCInnjJBbCctp0z8IrNmzWJt43uEPhABKCSEfBbefP0NXNcl4ZqkUza1NaD9Rga67ewy2KImWcIMm8nYBSzVgl9opC4j1NfAoLQwKNOZUgFpp0zCyOKXGolKa/GK7+IV16KCjm51HD5sBIjF+vfaem1H1wS3caP1kuEjRhD4Pn/6870CsOeeeyJRxKOPPlqR+cxnPkM6k6GxsZFyqcRflz6nRo0aRetGEcSZTAbf81i7di0ADQ0NhGHIP/7xjyq5Cy64AIDvfe97LF68mPr6en5x+88rSj9w4ECU1t1c0qVikXn/+2BlKFZTU4NXLvdrBen3FuQ735nKyy+/gu+FWKZNLl+g8r5V8fg4DEJSLqx5ew0H7zMMv6MdI/BwVUh9nY3WHo6tUXYKO2mTTCawXZt0OonjOLiuSzKRxk4kMRIu2A6IIvDySNiBXw4oZm3KhRQ16WK3Os65b5b65W/+W9LpdK/tuOySS9WgQYOkpqam6vrXvvY17r777sqEe99998VxXVatWlWROXfSOeqVV16RF198kauuugqI98AEQcCS55bKoWMOUQCTJ0/m73//e+V3Rx99NGEQ8Orf/lZV5qSzzla2bct9991HFEXM+sMfqyziNy69TP3617+WoHNfPcB+++/PypUreemllzj5xNhV/qUvTlR/uvfe/hfivgHUxn73/oT5Tz4mEydOoJAtQWQCCoMQUVG8kKwUhpnEL+fJOFDrwmXnn4ATtpFUJQamFI5dIJ1Ooq0UlpvESSfBVNiOQSLlMqBmEIlEAjeVwrAcMC3QBmU/olTOYtBKPl+ktU1TKCYZutOB7LT/GR8rCcOjj80Xx3E4cuwRm13O4mefkSAI+iSvWff+SU7/l3/dpggo+rUFWbRoEYViKf6iBEMZGKIJCYmiAMM08MplFFAqQ1sZ1q9vYvehLgYBfuSBEupqB1H0HJRdS2ZgA4atcTM2pmkSumlUpgYjkQZt4EUhoUBJR/iGQ6HZo1RQ5PKaMMoQRKlN1rkvMO7Y4/qsE37+sM/1WV7bmnJAP1eQF154AQSUCVoUoR+7Ny3boexFBEE82MqkM5RyWQRY29jEXsNHMiCdIJPJoGyXprzmuWVvEJJgQEMDbfl2jITguC5nfGUShjRg6AGECOWwRBBH6IEdMGjwULxCkUQavNBllwNO2eY6yfaMfq0gb775JkRxeG4YBcQ+B03ZK1fJ5XK5SkPXv9fK4MGHYck7GI5JaA6i6CX4z5mPEAJlIACw4uyGjjyRCy+aXOn0yV7qMqiP27YDWwf6tYLkO7KxdkBsSSp3VHxZxRbEtEzwAgygqbkdtIFhGBiWxjc0gbIIAA/w0fhEKImdYGvW5tmB7Rf91s370CMPS89ECN1HOIZhEAFKw7r3wI8UTsLGToCTLGPY7ytBRIQoiDqzWdf8brf8PiyOPPYIUVrFSRmSsDNiG2kxlSvjx5/Qf70k2wH6rQWZMWPG+4tqm+piGrygDGgipcgFIe3ZAjsPSWIli1iORbKg0Br0hmFQKs43iDav/1593VXy9BML2fczn+GkE79IriOHX45QGAysG8Att964Y86yFaPfKsgDDzyAbJKLLYo7uQWhB6AJwrjBzW0F7ORA3KTCSKVw2kCr2ElsYBCKh4SAAsfcPK/U26veRZsOp335K9x4w/d2KEM/Q79UkJtu/oHkOvdFdKG6573/1lcKRIOKNAEhDlAqByTSKdyUwkqmsKw48C9EE2IgWEAcAh50jwT/UCiVPCI/7FbDHegf6JcK8sgjj2CYZrxNNehSho3MiQI0sSUA0Iow0gghhmGRSteQyBgo20VbASGxgggGIGDEmvFuY3WE6odFQ91gEMX69es3K58d2DLol5P0V199lTAIOpVjwyZERIRUKUunSLxJSvAB001gJVJYbhplJ9GmgdZgUsYmR9IskdDgGrD+neWbVddyuYxpWT1tEf9YcP/cv+yY9Pch+p0FmTZtmrQ2t2BbNp4XxwJZhongEUaAxF4oZYB0dkrbNfA6PBTx9cjUJGrriJRG2zXsuucAfvGLcygXI8rFdkwjIpdrIpFIEQUuryz4qZimRkIfjVAuhUSeTVsezNqhHH7SpF67f6a2hiAosa5p8yzRB8WXJk7kgNGj5YXn+454YntGv1OQpUuXEkVRZVOQY9l4fgmzy5DoznlH9P53rxzGH4jQGpyEC6aFaTi4boKBmTS1421soJxvwit00LQ2hUSaluYiLW89ixeUKRZilvZcuwdeitaiTWb3/Tl8E/VN16RAwfr11QryxIKn5ahjNj/+aUP8/g/3xMs/n5S52g7Q74ZYixYtAuL91FprojAeQ4mCPfccgUincnQxYAH4YOiYsUQE6uvrsExNyjUwgyySbSSlSgTZJkot71HuaCIqthPmWkmbira1qym3NlNubyHf/B5+tgUdFDCiEtm23veZAwwbMhQEli1bxtDhO4tShihlyDHHHsN/33V3r8Ohf7/++zL+hOPlmSXPdpN54MF58tjjC7pdP/OMr6pf/PKXnHnmmR/w39w0rr/xBjlr0tmyPR9/0K8syOzZs6WxsRGlVIX9I4gCXMdl+Ih6zjv3XG648Ud4fojWZrzYJ15MdUNMAiYRDN95MKYCQwN+gVKuiBE6lHPtBKUikR8gIZQKZZqb2wi8kFDFc55CLk/oKcQsUCgG1G7EKbUxYiqhiCiKGJDJsMfnd6e+vp5UIs3XLjiv8qq/6pqr5Y477uDBBx/ktttu48EHH8T3PNrb21nyzLNVeV566aV0dHRwySWXyM03/aDKXFx68SWbNB+TL7pQ7rrzTnbZdVdWvbWySvY73/uu3HLLLfhlTx1/4gkyf/58ojBk3bp1nDD++H/6fLZF9CsL8thjj1XR4sQ77WIqn8MPP4Jjjz2OdLoGpQyiEBQmhCaGYSMSoAHbgl12bkBFPnhlCtlmCh2ttDQ1097STmtLjvVNOdraSjS3FvB9A9NM09xSIJv1KZcVJR/asnmyxTLFjeK+NsbAgQPBMDC15rVXV6hFi55W999/n/r9H/6nqnMWCgWCIOCSSy5h3rx5FY6pjfd5n3n2WfL2qlXk83l+ePPN3crb5zP7yl57f7rHN/6Pb/mJ3HXnnQysq+PtVas4f/IFVXL5fJ7A9zn4kDHyyMMPM3z4cJTW3dhRtif0KwV56qmn0Fp3446CiHHjxnHoYWNVfX09hmECGgm7vFwaTYQChg9TDKxxCP0ShWwHIgqlbZpa8mSLmvaCRUtWk/WSlFUtuSDF2raItqJDh5cAt4HQrSNPgshJE0SbHu/X1NRAGJLPZzcpZxgG5VKJlStXopRi+vTpWLZdRZ4A8QJpfUNDzJ7YA2zb7rZDsAv33HMPSmsuuugiLNuu7CzsQqkUbx144YUXGLbTTkyfPh2Jom512J7Qr4ZYXUeovY+IhJvggAP258yzYk/Sbrvtyuo1jQS+h9IWRIowKBNvp4J99tkVrT0iv0A+l6WtPU9bq8/jC17BsmoJA0W+VMYPPbxyiKkzuE4NEyaejueXsB0oex75XIivHOyaIT3WtQsNDQ0A/5Q8LZ1Oo7Qmn8tx4UUXccrJE9Tjjz8uG5K//fiWn0i2o4MvnXMO/zNzZhWZQxdqamp6naS/9OKLDKyrY+3atfi+z7hx47rVAeJJ/jHHHMOpE7+kJJLK5H+7xJYmB/4wacCAARVW9q6zPRTIFd/8RoUc+bTTThPQonVSICGmWSMKLa5CMhqZ+vWDpWXFrdKxYoqsWnKurFh4ocz82bGyew0yEKQGJAVSYyFpA6mzkOM/t99mkS+j6ZFMesN0+RXfrLDA9yZz2Oc/J07ClTv/6y5BIcrQcvfMGVXyE754So95LHjicTEsUyzHlkQqKUOGDe0m880rr+iV+Hp7Tf1qiPXpT38awzAqx6d14aGHHqx8FnxQEVHkk0gnCYIyWkdIp1frC0ceTL5jHfmOVrJtWVpacoSSJO/He0HKQElBNoQCcWopbT6vk2Fq7rt/dq9v4i52w5G77dZrHs8++yx1dXVorTEtC4ki3nnnnSoZrTVuIsHceQ904+Xtco8nk0nuuOOObvl3kVLvPHz4h2vcNox+pSCnnnpq5QEDWFZMYJbJpFm6ZKEALFv2VyxLYTsmxVw7EEEElgmjDzCor0vhlbJkW9oICgGlgofvKaRr4xWqMx4rXo8vBZrX3ljN9Nt++5GHGa7roJRQKvVOwdnREbOhjB8/vsf7Dzw4T1zXZdSoUSxbtiw+rVfrbgrSxc178cUXY9qWPPzoIxL/RxkkinAchxkzZvDFCd13PnYdanrcccd91KZuc+hXCnLdddepffbZp0JQFq+FwPPPv8gNN93E3AdmS0dHG74vhJGPNlS8eg5YBowdO4baGpdSPkfb+hZK+RK55g68XAHxusK3bJTqnJoJoAyyHR0sX/bRQ04MwyDwpZtHakN0dHSgDYNPfepTPd5/5ZVXKBWL7LXXXixbtgxE0Frz+uvVbI1drIdrVq9Ga00ulwPizu+4Lg0NDZx84kkKYOM1lqamJsqlEvvvv/9Hbuu2hn6lIADnnnsuEA8luvjUoggenPcIP/nJLeRy8Vs6DAKiMAQErSAS2HPkSMJyEa9QwMv7lLM+pfYsQb4YxycCggLpVBANSEywZZvGR67zsGFDMC21SY5az/OIwrAyqd8YXcrl+z4rVqxAGwZhEJDdKKp5v/32Q29ADXraqV9WEBM9BEHA26tWVXh9jzjiCDY8ebYrOqGLrX0H+qGCTJkyRR155JFEUYRScYSu7STQ2mTRwiX4QRxvBV0hFwpLQ+iDloj31jVSLpaRwMDL+0R+gBlFGHTtkepchOwyPQosU3Cdjx6+MaiujsAXXtuICnRDdNGEat3zI4miCMu2ueeee2hrbeXAAw8kmUrx3NKlVXJf/tKpKgpDlNZce+21VfdOPfVUUIpp06ZxxplflTAIqly4y5cvx3acj+WclP6KfqcgAOeccw6O4yCiMA2bcjkgihSmaaPU+4crdXHQRhEoickbmtc3UcwW8EohpXyAEWkMw+jkaIjXTKo2uJsQKZ931rzTQ00+GEaMGIFhQFNT7yHvXcyKTg+uW6BCON3e1oZhmjy3ZKk69NBDu50kdeMPbhLDNMlkMt3mGX/64yw1ZMgQZs+ezezZsxn92c9y+/SfVWQcxyEMQzYmr9ue0a/WQbpw/vnnq4ceekjuvXc2YKDQKOIIRYniybsXhBQKpZhKTiBhdg67/IiOfA7JCp4XUTbAC6Rzgm4SouLN610WJIIggudffP4j1/eaa67hqKO+0O2gmg1x9dVXM2vWrF65pb76lTPUSy+9JEuWLGHq1KlAzJ7Y3t7OUwufli7itzvvvLPHoVcX1r7bqG6bPk1qa2s5/7yvVZV14403MnPmzMqwbAf6MbPi/Pnz5fTTz6CttQPLcPDCEAhAdW4BVArLsMEXNB4DXfjuNRPYpUGTb1qD31ZClElOKdr9JNN+tZgCigLJOMbRzFf2pRNBwknw6MPzOfyIz2+1nee+++fIl089FaU1EkU89PDD3U6i2oEPh345xAI47rjj1OTJ5+OaBhKWUPigFKaTAkycRAqtQRnxPpBiCRCbthYfTYogEopByJo2j+aiEJmglGBRRhGgxYXIhkiRqkniBUVWrXljC7d607j77rsxTLNyxNzG54PswIdHv1UQgFtuuUV9eu89iAhi0gUFgRfw2TGHMGvWvey+525EnesbhoZsPiBf1LTnoRga5AMDM1mHj4sXQSigiSfsOjIhVAxqGML119/Ip/beCy/aumOSFixYQBgETJo0CW0YvPbaa1u6Sv0e/VpBAKZOuY6EbZNOuigijjn6KJ5fskgVCgWy2TwBEAK48G5znqaC0Oo7kBmGkRmKtmoIxUCb8cJgQIQQgRaUjlegn3/+r9z1X7/tdhrs1oRHH5svuWyWPfbck6OOOoooDLsFI+7AR8CWjnXpi3TOV0+X2nRK/u3Ci0REuGvG/5PMwHrBMMVyTNEaMUH22jUj+410ZY965IDhyN5Dkb1HKNn/UzXigLgKsTBFYQlYAqagECdty6Lnntyq45OuufZbgkImX3RhvMFJIcccd+xWXef+kPq9BQEYNWoUIsJv7vhPNX367TLlmqtjL04U4XsRkUCg4I3VWd5oLLGqGd5qgreb4a13hH+80RFTPSgQrd4nDVIR2jbwfY/FixdvwRb+c6xYsQKUYo899oiPt04m+/XpslsL+qWbd2O88OKLGIbBnrvvIS0tLbS2b3DKk6E7GRxCQhE8ZRCqgI5Op1cmBUTgF8GPQLrUo5M2KPJDMDZ9LPLWgFKphGmaDB48mDAMN9oWsAMfFduEgix78SVaOrK0dsS+/9qaAbR1tGPbbnwarIKu6VZIV2SuATogWwhRnTohaAxtoAxNEJTj/bkGZGqTlUXHrRWu6xL4Pvl8nsbGRnzfp7a2dktXq9+j3w+x5j/xpLy3vhUUuIkECkV7Rzuu7eB7JSBCKb0BgUMny2EUgWiUMhHAsl1AE0YhgV8GIrRlQBSHf5w8buJWvZ5w0EEHAbEna968eSilKtd24KOj3y4UboiLL79S3nj972iBN17/O2+98SaaeO4B79PIiaKTh3SD98KGzVcqpj1RERVuXwNGjx7F8qUvbtUKArDrbiPl7VWrQClGjBjB2ytXbfV13uqxpb0EfZ0uv/xycWxTDJCUbYgZx+ZKJ49cFxmQdPpxY09VldfKjK8rBI1gIieccrxs6XZ90HTzj34oV159Vb+p79aetok5yIYoFot4XsxgUvbCSpRupLrC2WNEKgKliEQDCpGISvCVet+s2KbFfvvs9wm34qPj29dN3WE1+hDbnIIImmTSxUARhT6EYdX9SMVh8KIgQhFFJqK6FCQipmbs+hzzWu29996feDt2YOvA/wcEURm5SSbcjwAAAABJRU5ErkJggg==';

function buildEmailHtml(payload, forClient) {
  const header = `
    <div style="background:#ffffff;padding:20px 28px;text-align:center;border-bottom:1px solid #e0d5c0;">
      <img src="${LOGO_B64}" alt="Finanční Frajer" style="height:50px;width:auto;" />
    </div>`;

  const intro = forClient ? `
    <p style="color:#1a1a1a;font-size:15px;margin:0 0 16px;">
      Dobrý den, <strong>${payload.jmeno || ''}</strong>,<br><br>
      děkuji za vyplnění kalkulačky životního pojištění. Níže najdete orientační výsledky Vaší kalkulace.
      Rád se s Vámi spojím a probereme podrobnosti osobně.
    </p>` : '';

  const footer = forClient ? `
    <div style="background:#f7f5f0;padding:16px 28px;border-top:1px solid #e0d5c0;">
      <p style="color:#1a1a1a;font-size:13px;margin:0 0 4px;"><strong>Daniel Ševčík</strong> – Finanční Frajer</p>
      <p style="color:#888;font-size:12px;margin:0;">📞 731 980 199 | 🌐 financnifrajer.cz</p>
      <p style="color:#aaa;font-size:11px;margin:8px 0 0;">Tato kalkulace má orientační charakter. Skutečná cena závisí na zdravotním stavu a výběru pojišťovny.</p>
    </div>` : `
    <div style="background:#f7f5f0;padding:16px 28px;border-top:1px solid #e0d5c0;">
      <p style="color:#888;font-size:12px;margin:0;">Tato kalkulace má orientační charakter. Skutečná cena závisí na zdravotním stavu a výběru pojišťovny.</p>
    </div>`;

  return `<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:20px;margin:0;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e0d5c0;">
  ${header}
  <div style="padding:24px 28px;">
    ${intro}
    <p style="color:#1a1a1a;font-size:15px;margin:0 0 6px;"><strong>Jméno:</strong> ${payload.jmeno || ''}</p>
    <p style="color:#1a1a1a;font-size:15px;margin:0 0 6px;"><strong>Telefon:</strong> ${payload.telefon || '(neuvedeno)'}</p>
    <p style="color:#1a1a1a;font-size:15px;margin:0 0 20px;"><strong>Orientační cena:</strong> <span style="color:#b8952e;font-weight:700;">${payload.cena_mesicne || ''}</span></p>
    ${payload.nastaveni || ''}
    ${payload.scenare || ''}
  </div>
  ${footer}
</div>
</body>
</html>`;
}

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const payload = JSON.parse(event.body);

    // Email tobě
    const toMe = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: 'Finanční Frajer <kalkulacka@financnifrajer.cz>',
        to: ['daniel@financnifrajer.cz'],
        reply_to: payload.reply_to,
        subject: payload.subject,
        html: buildEmailHtml(payload, false)
      })
    });

    // Email klientovi
    const toClient = payload.reply_to ? fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: 'Daniel Ševčík – Finanční Frajer <kalkulacka@financnifrajer.cz>',
        to: [payload.reply_to],
        subject: 'Vaše kalkulace životního pojištění – Finanční Frajer',
        html: buildEmailHtml(payload, true)
      })
    }) : Promise.resolve();

    await Promise.all([toMe, toClient]);

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ ok: true })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
