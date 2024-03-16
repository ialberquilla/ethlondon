import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IHypERC20 is IERC20 {
  /**
    * @notice Transfers tokens to the specified recipient on a remote chain
    * @param _destination The domain ID of the destination chain
    * @param _recipient The address of the recipient, encoded as bytes32
    * @param _amount The amount of tokens to transfer
    */
  function transferRemote(
    uint32 _destination,
    bytes32 _recipient,
    uint256 _amount
  ) external payable;
}