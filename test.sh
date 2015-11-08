



clear
echo '--------- Should work: ---------'

echo -n 'POST /move {direction: forward}   => '
curl -X POST http://localhost:8000/move --data direction=forward  && echo

echo -n 'POST /move {direction: backward}  => '
curl -X POST http://localhost:8000/move --data direction=backward && echo

echo -n 'POST /move {direction: left}      => '
curl -X POST http://localhost:8000/move --data direction=left     && echo

echo -n 'POST /move {direction: right}     => '
curl -X POST http://localhost:8000/move --data direction=right    && echo

echo
echo '--------- Should fail: ---------'

echo -n 'POST /move {}                     => '
curl -X POST http://localhost:8000/move                           && echo

echo -n 'POST /move {direction: stuff}     => '
curl -X POST http://localhost:8000/move --data direction=stuff    && echo

echo
echo