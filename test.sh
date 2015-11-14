
host=http://192.168.1.17:8000


clear
echo '--------- Should work: ---------'

echo -n 'POST /move {direction: forward}   => '
curl -X POST $host/move --data direction=forward  && echo

echo -n 'POST /move {direction: backward}  => '
curl -X POST $host/move --data direction=backward && echo

echo -n 'POST /move {direction: left}      => '
curl -X POST $host/move --data direction=left     && echo

echo -n 'POST /move {direction: right}     => '
curl -X POST $host/move --data direction=right    && echo

echo
echo '--------- Should fail: ---------'

echo -n 'POST /move {}                     => '
curl -X POST $host/move                           && echo

echo -n 'POST /move {direction: stuff}     => '
curl -X POST $host/move --data direction=stuff    && echo

echo
echo